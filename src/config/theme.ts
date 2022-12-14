import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      borderRadius: string;
      boxShadow: string;
      header: {
        height: {
          xs: number;
          md: number;
        };
      };
    };
  }
  interface ThemeOptions {
    custom?: {
      borderRadius?: string;
      boxShadow?: string;
      header?: {
        height: {
          xs: number;
          md: number;
        };
      };
    };
  }

  interface PaletteColorOptions {
    main: string;
    dark?: string;
    light?: string;
    A100?: string;
    A200?: string;
    A400?: string;
  }

  interface PaletteOptions {
    tertiary?: PaletteColorOptions;
  }

  interface PaletteColor {
    A100?: string;
    A200?: string;
    A400?: string;
  }

  interface Palette {
    tertiary?: PaletteColorOptions;
  }
}

export interface IColor {
  main: string;
  A100: string;
  A200: string;
  A400: string;
  dark: string;
  light: string;
}

const themeFactory = ({
  primary,
  secondary,
}: {
  primary: IColor;
  secondary: IColor;
}) => {
  const colors = {
    formLabel: "#333333",
    primary,
    secondary,
    tertiary: {
      main: "#16213E",
      A100: "#FF5403",
      A200: "#6C38FF",
    },
  };

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1224,
    xl: 1536,
  };

  let theme = createTheme({
    spacing: 4,
    breakpoints: {
      values: breakpoints,
    },
    palette: {
      mode: "light",
      primary: colors.primary,
      secondary: colors.secondary,
      tertiary: colors.tertiary,
      text: {
        primary: "#333333",
        secondary: "#474747",
      },
      background: {
        default: "#FFFFF",
      },
      success: {
        main: "#3ecc96",
      },
      error: {
        main: "#FF3941",
      },
      info: {
        main: "#22B8E8",
      },
      warning: {
        main: "#FFB301",
      },
      divider: "#E7E7F1",
    },
    typography: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
      h1: {
        fontWeight: "bold",
      },
      h2: {
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "bold",
      },
      h3: {
        fontSize: "30px",
        lineHeight: "37px",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "24px",
        lineHeight: "29px",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "bold",
      },
      h6: {
        fontSize: "18px",
        lineHeight: "24px",
        fontWeight: "bold",
      },
      subtitle1: {
        fontSize: "18px",
        lineHeight: "22px",
        fontWeight: "bold",
      },
      subtitle2: {
        fontSize: "14px",
        lineHeight: "17px",
        fontWeight: "medium",
      },
      body1: {
        fontSize: "16px",
        lineHeight: "24px",
      },
      body2: {
        fontSize: "14px",
        lineHeight: "17px",
      },
      button: {
        fontSize: "16px",
        lineHeight: "19px",
        fontWeight: "600",
        textTransform: "none",
      },
    },
    shape: {
      borderRadius: 4,
    },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        },
      },
      MuiAppBar: {
        defaultProps: {
          color: "transparent",
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 48,
            height: 26,
            padding: 0,
            margin: 8,
          },
          switchBase: {
            padding: 1,
            "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
              transform: "translateX(16px)",
              color: "#fff",
              "& + $track": {
                opacity: 1,
                border: "none",
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
          },
          track: {
            borderRadius: 13,
            border: "1px solid #bdbdbd",
            backgroundColor: "#fafafa",
            opacity: 1,
            transition:
              "background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            padding: "12px 36px",
            fontSize: "16px",
            borderRadius: "6px",
            [`@media (max-width: ${breakpoints.sm}px)`]: {
              padding: "13px 25px",
            },
          },
          contained: {
            color: "#fff",
          },
          sizeSmall: {
            padding: "10px 20px",
            height: "36px",
          },
          sizeMedium: {
            padding: "10px 20px",
            height: "42px",
          },
          sizeLarge: {
            padding: "18px 36px",
            height: "56px",
          },
          outlined: {
            background: "#fff",
            color: "#000",
            border: `1px solid #FF5403`,
            "&:hover": {
              color: colors.primary.main,
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "6px",
          },
        },
        defaultProps: {
          elevation: 0,
        },
      },
      MuiGrid: {
        defaultProps: {
          columnSpacing: "24px",
        },
      },
      MuiTextField: {},
      MuiSelect: {},
      MuiPagination: {},
      MuiOutlinedInput: {},
      MuiCheckbox: {},
      MuiFormLabel: {},
      MuiAccordionDetails: {
        styleOverrides: {
          root: {
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: 0,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#333333",
          },
        },
        defaultProps: {
          // @ts-ignore
          component: "div",
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: { background: "#E7E7F199 0% 0% no-repeat padding-box;" },
        },
      },
    },
    custom: {
      borderRadius: "6px",
      boxShadow: "0px 8px 60px #00000005",
      header: {
        height: {
          xs: 60,
          md: 80,
        },
      },
    },
  });

  theme.typography.h6 = {
    ...theme.typography.h6,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "18px",
    },
  };

  theme.typography.body1 = {
    ...theme.typography.body1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  };

  if (theme?.components?.MuiAppBar) {
    theme.components.MuiAppBar = {
      ...theme.components?.MuiAppBar,
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
        },
      },
    };
  }

  if (theme?.components?.MuiContainer) {
    theme.components.MuiContainer = {
      ...theme.components?.MuiContainer,
      styleOverrides: {
        root: {
          [theme.breakpoints.down("md")]: {
            paddingLeft: theme.spacing(4.25),
            paddingRight: theme.spacing(4.25),
          },
        },
      },
    };
  }

  if (theme?.components?.MuiOutlinedInput) {
    theme.components.MuiOutlinedInput = {
      ...theme.components?.MuiOutlinedInput,
      styleOverrides: {
        root: {
          minHeight: "48px",
          backgroundColor: "#0000",
          color: "black",
          borderRadius: "6px",
          ".MuiOutlinedInput-input": {
            "&::placeholder": {
              color: "#0000",
              opacity: 1,
            },
          },

          "&::placeholder": {
            color: "#868585",
          },

          ".Mui-focused": {
            borderWidth: "1px",
          },
          input: {
            "&:-webkit-autofill,&:-webkit-autofill:hover,&:-webkit-autofill:focus,&:-webkit-autofill:active":
              {
                WebkitBoxShadow: `0 0 0 30px ${theme.palette.background.default} inset !important`,
              },
          },
        },
      },
    };
  }

  if (theme?.components?.MuiPagination) {
    theme.components.MuiPagination = {
      ...theme.components?.MuiPagination,
      styleOverrides: {
        root: {
          ".MuiPaginationItem-previousNext": {
            backgroundColor: theme.palette.background.paper,
          },
        },
      },
    };
  }

  if (theme?.components?.MuiFormLabel) {
    theme.components.MuiFormLabel = {
      ...theme.components?.MuiFormLabel,
      styleOverrides: {
        root: {
          color: colors.formLabel,
        },
      },
    };
  }

  return theme;
};

export default themeFactory;
