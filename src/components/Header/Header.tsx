import Button from './Button'

import '../../styles/Header.css'

function Header() {
  
    return (
      <div className="header">
        <Button
          title='Leon Yee Leong Tan'
        />

        <Button
          title='Bio'
        />
        <Button
          title='Career'
        />
        <Button
          title='Interests'
        />
        <Button
          title='Resume'
        />
      </div>
    )
  }
  
  export default Header