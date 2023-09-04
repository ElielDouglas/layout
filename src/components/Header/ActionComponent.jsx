import { useState } from 'react';
import PropTypes from 'prop-types'

export default function ActionComponent(props) {
  const [selected, setSelected] = useState(false)

  return (
    <>
       <div onClick={()=>{ setSelected(!selected)}} className={selected === false ? 'action' : 'action selected'}>
          <img src={props.item.icon} alt="" /> <span>{props.item.title}</span>
      </div>
    </>
  )
}

ActionComponent.propTypes = {
    key : PropTypes.number.isRequired,
    item : PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired,
      }
    ).isRequired,
}
