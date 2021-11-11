import { ThemeOptions } from '@mui/material/styles/createTheme';

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            main: '#3f85b5',
        },
        secondary: {
            main: '#b800f5',
        },
        background: {
            default: '#f9f9f9',
            paper: '#fcf4ff',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
        },
        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
        },
        h3: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
        },
        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
        },
        h5: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
        },
        h6: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
        },
        subtitle1: {
            fontFamily: 'Montserrat',
        },
        subtitle2: {
            fontFamily: 'Montserrat',
        },
        body1: {
            fontFamily: 'Montserrat',
        },
        body2: {
            fontFamily: 'Montserrat',
        },
        button: {
            fontFamily: 'Montserrat',
        },
        caption: {
            fontFamily: 'Montserrat',
        },
        overline: {
            fontFamily: 'Montserrat',
        },
    },
    spacing: 8,
    direction: 'ltr',
    shape: {
        borderRadius: 8,
    },
    components: {
        MuiButtonBase: {
            defaultProps: { disableRipple: true },
        },
        MuiList: {
            defaultProps: { dense: true },
        },
        MuiMenuItem: {
            defaultProps: { dense: true },
        },
        MuiTable: {
            defaultProps: { size: 'small' },
        },
        MuiButtonGroup: {
            defaultProps: { size: 'small' },
        },
        MuiCheckbox: {
            defaultProps: { size: 'small' },
        },
        MuiFab: {
            defaultProps: { size: 'small' },
        },
        MuiFormControl: {
            defaultProps: { margin: 'dense', size: 'small' },
        },
        MuiFormHelperText: {
            defaultProps: { margin: 'dense' },
        },
        MuiIconButton: {
            defaultProps: { size: 'small' },
        },
        MuiInputBase: {
            defaultProps: { margin: 'dense' },
        },
        MuiInputLabel: {
            defaultProps: { margin: 'dense' },
        },
        MuiRadio: {
            defaultProps: { size: 'small' },
        },
        MuiTextField: {
            defaultProps: { margin: 'dense', size: 'small' },
        },
        MuiTooltip: {
            defaultProps: { arrow: true },
        },
        MuiAppBar: {
            defaultProps: {
                color: 'inherit',
            },
            styleOverrides: {
                colorInherit: {
                    backgroundColor: '#3f85b5',
                    color: '#fff',
                },
            },
        },
        MuiSwitch: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    width: 42,
                    height: 26,
                    padding: 0,
                    margin: 8,
                },
                switchBase: {
                    padding: 1,
                    '&$checked, &$colorPrimary$checked, &$colorSecondary$checked':
                        {
                            transform: 'translateX(16px)',
                            color: '#fff',
                            '& + $track': {
                                opacity: 1,
                                border: 'none',
                            },
                        },
                },
                thumb: {
                    width: 24,
                    height: 24,
                },
                track: {
                    borderRadius: 13,
                    border: '1px solid #bdbdbd',
                    backgroundColor: '#fafafa',
                    opacity: 1,
                    transition:
                        'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                },
            },
        },
        MuiButton: {
            defaultProps: {
                size: 'small',
            },
            styleOverrides: {
                root: {
                    background:
                        'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    border: 0,
                    borderRadius: 3,
                    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                    color: 'white',
                    height: 48,
                    padding: '0 30px',
                },
            },
        },
    },
};
