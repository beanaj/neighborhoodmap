class Utility {
    getStyleByCategory(category){
        switch(category) {
            case 'Retail':
                return 'tag round bcGreen';
            case 'Accommodations':
                return 'tag round bcPink';
            case 'Art':
                return 'tag round bcRed';
            case 'Activities':
                return 'tag round bcOrange';
            case 'Bar':
                return 'tag round bcBlue';
            case 'Food':
                return 'tag round bcPurple';
            case 'City Services':
                return 'tag round bcBrown';
            default:
                return 'tag round';
        }
    }
}

export default new Utility()