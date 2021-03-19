import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div
                className="book-list"
                style={{ background: theme.bg, color: theme.syntax }}
            >
                <ul>
                    <li style={{ background: theme.ui }}>Le Caméléon</li>
                    <li style={{ background: theme.ui }}>Une Vie de Boy</li>
                    <li style={{ background: theme.ui }}>Vol de Nuit</li>
                </ul>
            </div>
        )
    }
}
