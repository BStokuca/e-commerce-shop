module.exports = {
    extends: [
        "react-app",
        "prettier",
        "prettier-react"
    ],
    plugins: [
        "prettier"
    ],
    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
}