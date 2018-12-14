//Import custom image icons for markers
import bcRed from '../icons/red.png'
import bcPurple from '../icons/purple.png'
import bcPink from '../icons/pink.png'
import bcOrange from '../icons/orange.png'
import bcGreen from '../icons/green.png'
import bcBrown from '../icons/brown.png'
import bcBlue from '../icons/blue.png'

class Utility {
    getStyleByCategory(category) {
        switch (category) {
            case 'All':
                return 'tag round bcWhitesmoke';
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

    formatPhone(number) {
        return `${number.slice(0, 2)} ${number.slice(2, 5)}-${number.slice(5, 8)}-${number.slice(8)}`;
    }

    getColorIcon(style, marker, bool) {
        if (bool) {
            marker.setIcon({});
        } else if (style.includes('Blue')) {
            marker.setIcon(bcBlue);
        } else if (style.includes('Brown')) {
            marker.setIcon(bcBrown);
        } else if (style.includes('Green')) {
            marker.setIcon(bcGreen);
        } else if (style.includes('Orange')) {
            marker.setIcon(bcOrange);
        } else if (style.includes('Pink')) {
            marker.setIcon(bcPink);
        } else if (style.includes('Purple')) {
            marker.setIcon(bcPurple);
        } else if (style.includes('Red')) {
            marker.setIcon(bcRed);
        } else {
            marker.setIcon({});
        }
    }


}

export default new Utility()