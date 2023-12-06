module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": { // rules configuration here <-----
        "no-unused-vars": "off" ,
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/no-unknown-property": "off",
        "react/no-unescaped-entities": "off",
        "react/no-deprecated": "off",
        "no-extra-semi": "off",
        
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
       
}
