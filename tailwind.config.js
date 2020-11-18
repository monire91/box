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
            borderRadius:{
              big:'40px'
            },
            height:{
              tall:'300px'
            },
            width:{
                tall:'400px'
            },
            colors: {
                primary: '#1388e6',
                secondary: '#1abb9c',
                neutral: '#ebebeb',
            },
            inset: {
                '1/2': '50%',
                '40%': '40%',
            },
            screens: {
                'xs': '400px',
            }
        },
    },
    variants: {
        height: ['hover', 'group-hover'],
        textColor: ['hover', 'group-hover'],
        opacity: ['hover', 'group-hover'],
        translate:['responsive', 'hover', 'focus', 'active', 'group-hover'],
        borderRadius:['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
    plugins: [],
}
