 import {useTheme} from '../hooks/useTheme'

 //style
 import "./ThemeSelecter.css"

const themeColors = ['#58249c', '#249c6b', '#b70233 ']

 export default function ThemeSelecter() {
    const {changeColor} = useTheme() 

    return(
        <div className='theme-selector'>
            <div className='theme-buttons'>
                 {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                 ))}
            </div>
        </div>
    )
 }