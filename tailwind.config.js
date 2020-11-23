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
              tall:'300px',
              taller:'400px'
            },
            width:{
                medium:'300px',
                tall:'400px',
                taller:'500px'
            },
            colors: {
                primary: '#1388e6',
                secondary: '#1abb9c',
                neutral: '#ebebeb',
                neutral1: '#c5c5c5',
                neutral2: '#f2f5f8',
                neutral3: '#f8fafb',
                neutral4: '#f1f4fc',
                accent: '#ff4848',
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
