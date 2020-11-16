module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            fontFamily: {
                lobster: ['Lobster'],
            },
            colors:{
                primary: '#1388e6',
                secondary: '#1abb9c',
                neutral: '#ebebeb',
            },
            inset: {
                '1/2': '50%',
                '40%': '40%',
            }
        },
    },
    variants: {height: ['hover']},
    plugins: [],
}
