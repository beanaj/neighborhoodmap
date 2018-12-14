/**
 * Helper class to work with FourSquare API
 * @author Andrew Jacobsen
 */
class YelpAPI {
    /**
     * Constructs the YelpAPI Object
     * @param businesses - An object with the Yelp Business IDs
     */
    constructor(businesses) {
        this.businesses = businesses;
        this.businessUrl = 'https://api.yelp.com/v3/businesses/';
        this.clientSecret = 'k3UvqNHUEO3V7-ZqZ-PVlfGrmWUEz90g-jPaQSoBrg5ZlGUD0pB7uLOIeOCbJ6z5upbpsqMqegA6LEA6ft6cl7NSDHasMQenJE7HeuuUjvab_2ZvKDHcZZu8KooSXHYx';
    }

    /**
     * Gets the information for each venue
     *
     * @returns {any[]}
     */
    getVenueData() {
        try{
            const businessIDs = Object.keys(this.businesses).map(key => {
                return key
            });
            //Returning individual promises so that we can begin to render the React page as the requests suceed.
            return businessIDs.map(async id => {
                let body = await this.makeRequest(id);
                body.data.category = this.businesses[id].category;
                return body;
            });
        }catch (e) {
            return e;
        }
    };

    /**
     * Makes a request to the middleware for Yelp information
     *
     * @param id - the ID of the business whose information we are requesting
     * @returns {Promise<any>}
     */
    makeRequest(id) {
        let url = `${this.businessUrl}${id}`;
        let auth = `Bearer ${this.clientSecret}`;
        return new Promise((resolve, reject) => {
            //Hit our internal API with required headers included
            fetch('/api/yelp', {
                method: 'GET',
                headers: {
                    'Authorization': auth,
                    'x-uri': url
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
}


export default YelpAPI;