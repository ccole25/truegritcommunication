// WARNING: The contents of this file _including process.env variables_ will be
// exposed in the client code.

const headContent = {
  title: "True Grit Communication, LLC",
  titleTemplate: "True Grit Communication, LLC",
  meta: [
    {name: "description", content: "Fiber-Optic Solutions. Specializing In: Safe Work Practices, Fiber-Optic Splicing, Connections & Terminations, Outside Plant & Inside Plant, CAT-5/6 Installations & Terminations, Rack & Electronic Equipment Installations, Training & Education, FTTH Splicing & Terminations, Specialized Fiber-Optic Testing, Excellent Service & Problem Solving, Turbines, MET Towers, Sub-Stations & O&M Facilities & Office."}
  ]
};

const config = {
  development: {
    assetPath: "http://localhost:8888/assets",
    head: headContent,
    logger: {
      pretty: true,
      level: "info"
    }
  },
  production: {
    // This should be a CDN in development
    assetPath: process.env.ASSET_URL || "http://localhost:8888/assets",
    head: headContent,
    logger: {
      pretty: false,
      level: "warn"
    }
  }
};

export default (config[process.env.NODE_ENV] || config["development"]);
