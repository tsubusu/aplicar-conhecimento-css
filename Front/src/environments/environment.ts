// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: true,
    urlAPI: 'https://' + window.location.hostname + ':7163',
    logLevel: 'Error',
    dateFormat: 'DD/MM/YYYY',
    project: '[BDIT - Frontend]',
    name: 'desenvolvimento',
    formatosPermitidosAnexo: [
        ".bat",
        ".exe",
        ".cmd",
        ".sh",
        ".php([0-9])?",
        ".pl",
        ".cgi",
        ".386",
        ".dll",
        ".com",
        ".torrent",
        ".js",
        ".app",
        ".jar",
        ".pif",
        ".vb",
        ".vbscript",
        ".wsf",
        ".asp",
        ".cer",
        ".csr",
        ".jsp",
        ".drv",
        ".sys",
        ".ade",
        ".adp",
        ".bas",
        ".chm",
        ".cpl",
        ".crt",
        ".csh",
        ".fxp",
        ".hlp",
        ".hta",
        ".inf",
        ".ins",
        ".isp",
        ".jse",
        ".htaccess",
        ".htpasswd",
        ".ksh",
        ".lnk",
        ".mdb",
        ".mde",
        ".mdt",
        ".mdw",
        ".msc",
        ".msi",
        ".msp",
        ".mst",
        ".ops",
        ".pcd",
        ".prg",
        ".reg",
        ".scr",
        ".sct",
        ".shb",
        ".shs",
        ".url",
        ".vbe",
        ".vbs",
        ".wsc",
        ".wsf",
        ".wsh",
    ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
