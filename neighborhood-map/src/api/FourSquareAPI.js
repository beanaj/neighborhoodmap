/**
 * Helper class to work with FourSquare API
 * @author Andrew Jacobsen
 */
class FourSquareAPI {
    constructor(venues) {
        this.venues = venues;
        this.multiUrl = 'https://api.foursquare.com/v2/multi';
        this.clientID = 'OPWD3RFPKQ3PYVMXF415K0LS4LMEDHTXL0CJIMBYFNF2BMNC';
        this.clientSecret = 'SSWDFQNDX0X3FFJZWWDMLUCRUSVPVD2RY0UNE514WRKP1WHA';
    }


    getVenueData() {
        let requestBatches = this.getRequestBatches(this.getVenueIDs());
        return Promise.all(requestBatches.map(async batchURL => {
                let body = await this.makeRequest(batchURL);
                return body;
        })).then(result=>{
            return(result);
        });
    };


    makeRequest(batchURI) {
        let url = `${this.multiUrl}?requests=${batchURI}&client_id=${this.clientID}&client_secret=${this.clientSecret}&v=${this.generateVersion()}`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET'
            }).then(response => {
                if (response.status === 200) {
                    resolve(response.json());
                } else {
                    reject('ERR: Problem getting FourSquare Data');
                }
            })
        })
    }

    /**
     * Gives us a YYYYMMDD string to use as our v= query parameter for the API requests.
     * @returns {string}
     */
    generateVersion() {
        return new Date().toISOString().split('T')[0].split('-').join('');
    }

    getVenueIDs() {
        return Object.keys(this.venues).map(function (key) {
            return key;
        })
    }

    getRequestBatches(venueIDs) {
        let batches = [];
        for (let i = 0; i < venueIDs.length; i += 5) {
            batches.push(venueIDs.slice(i, i + 5));
        }
        return batches
            .map(batch => {
                return batch.map(venueID => {
                    return `/venues/${venueID}`
                }).join(',')
            });
    }
}


export default FourSquareAPI;