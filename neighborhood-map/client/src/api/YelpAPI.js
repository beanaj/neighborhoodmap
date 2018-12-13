const fetchJsonp = require('fetch-jsonp');

/**
 * Helper class to work with FourSquare API
 * @author Andrew Jacobsen
 */
class YelpAPI {
    constructor(businesses) {
        this.businesses = businesses;
        this.businessUrl = 'https://api.yelp.com/v3/businesses/';
        this.clientSecret = 'k3UvqNHUEO3V7-ZqZ-PVlfGrmWUEz90g-jPaQSoBrg5ZlGUD0pB7uLOIeOCbJ6z5upbpsqMqegA6LEA6ft6cl7NSDHasMQenJE7HeuuUjvab_2ZvKDHcZZu8KooSXHYx';
    }


    getVenueData() {
        const businessIDs = Object.keys(this.businesses).map(key => {return key});
        return Promise.all(businessIDs.map(async id => {
                let body = await this.makeRequest(id);
                body.filterCategory = this.businesses[id];
                return body;
        })).then(result=>{
            return(result);
        });
    };


    makeRequest(id) {
        let url = `${this.businessUrl}${id}.jsonp`;
        return new Promise((resolve, reject) => {
            fetchJsonp(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.clientSecret}`
                }
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
}


export default YelpAPI;