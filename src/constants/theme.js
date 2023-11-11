
import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const COLORS = {
    blue: "#4267B2",
    red: "#EB6A58",
    green: "#449282",
    white: "#FBFBFB",
    lightWhite: "#FFFFFF",
    lightBlue: "#6885C1",
    lightRed: "#EB9C9B",
    lightGreen: "#73ADA1",
    black: '#121212',
    dark: '#3D3A45',
    gray: '#8C8896',
    lightGrey: '#D1CFD5',
    primary: "#2A4D50",
    secondary: "#DDF0FF",
    tertiary: "#FF7754",
    gray2: "#C1C0C8",
    offwhite: "#F3F4F8",

    Black: '#000000',
    BlackRGB10: 'rgba(0,0,0,0.6)',
    LightBlack: '#526D82',
    Red: '#FE0000',
    RedRGBA0: 'rgba(208, 21, 34, 0.😎',
    Grey: 'rgba(70, 70, 70, 0.4)',
    DarkGrey: '#0b0b0b',
    Blue: '#0A6EBD',
    LightBlue: '#D2E9E9',
    Yellow: 'rgba(255, 162, 0, 0.2)',
    Yellow1: '#F6BA6F',
    Yellow2: 'rgba(255, 162, 0, 0.9)',
    PinkRGBA75: '#FF9B9B',
    White: '#FFFFFF',
    WhiteRGBA75: 'rgba(255,255,255,0.75)',
    WhiteRGBA50: 'rgba(255,255,255,0.50)',
    WhiteRGBA32: 'rgba(255,255,255,0.32)',
    WhiteRGBA15: 'rgba(255,255,255,0.49)',
};


const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
};

const TEXT = {
    xxSmall: 11,
    xSmall: 13,
    small: 15,
    medium: 17,
    large: 21,
    xLarge: 27,
    xxLarge: 32,
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
};


export { COLORS, SIZES, SHADOWS, TEXT };
