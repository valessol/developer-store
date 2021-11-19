import { Switch as AntSwitch } from 'antd';
import { useContext } from 'react';
import { IoSunnyOutline, IoMoon } from 'react-icons/io5';
import { UIContext } from '../Context/UIContext';

export const Switch = ({className, title}) => {
    const { darkMode, setDarkMode } = useContext(UIContext)

    const handleSwitch = () => {
        setDarkMode(!darkMode)
    }
return (
    <div className={className}>
        {
            title && <span className="nav-link" style={{display: 'inline', marginRight: '1rem'}}>{title}</span>
        }
        <AntSwitch
            className={darkMode ? 'switch--checked' : 'switch--unchecked'}
            checkedChildren={<IoSunnyOutline />}
            unCheckedChildren={<IoMoon />}
            onClick={handleSwitch}
        />
    </div>
)
}

