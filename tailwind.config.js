module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            // fontFamily: {
            //     dana: ['dana'],
            //     'dana-bold': ['dana-bold'],
            // },
            fontFamily: {
                'sans': ['dana', 'Helvetica', 'Arial', 'sans-serif']
            },
            colors:{
                primary: '#1388e6',
                secondary: '#ecc94b',
                neutral: '#ebebeb',
            },
            inset: {
                '1/2': '50%',
                '40%': '40%',
            }
        },
    },
    variants: {},
    plugins: [],
}
