// import heroIllustration from "/assets/illustrations/hero-section.svg";
export default function styles(theme) {
  return {
    section: {
      marginBottom: 80,
    },
    title: {
      display: "block",
      width: "100%",
      textAlign: "center",
      fontWeight:'600',
      ...theme.palette.text.gradient
    },
    title1: {
        display: "block",
        width: "100%",
        textAlign: "center",
        fontWeight:'600',
        ...theme.palette.text.gradient
    },
    subtitle: {
      display: "block",
      width: "100%",
      textAlign: "center",
      ...theme.palette.text.gradient,
    },
    description: {
      margin: "auto",
      display: "block",
      width: "80%",
      textAlign: "center",

      color: theme.palette.text.primary,
    },
    secondaryDesc: {
      color: theme.palette.text.secondary,
      width: "100%",
    },
    textAlignLeft: {
      margin: 0,
      marginBottom: 24,
      textAlign: "left",
      // [theme.breakpoints.down("sm")]: {
      //   textAlign: "center",
      // },
    },
    heroSection: {
       
      
      },
      heroSectionContent: {
        width: "100%",
        padding: "20px 0",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
      },
      heroImg:{
          width:'85vw',
          objectFit:'contain'
      },
    categoriesSection: {
      // [theme.breakpoints.down("sm")]: {
      //   display: "flex",
      // },
    },
    categoriesIllustration: {
      marginLeft: "auto",
      width: "100%",
    },
    video: {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        // display: "flex",
      },
    },
    videoDesc: {
      marginTop: 40,
    },
    Guidelines:{
        // alignItems:"baseline",
        gap: 0
    }
  };
}
