import React, { useContext } from 'react'
import { withFormControl } from '.'
import PropTypes from 'prop-types'
import styles from './Form.module.css'
import { FiMail } from 'react-icons/fi'
import DefaultInput from './DefaultInput'
import { FieldsContext } from './Form'

function Email(props) {
  const {
    name,
    value,
    placeholder,
    model,
    setValue,
    component: Component,
    handleDispatch,
    item,
  } = props

  // console.log('<email />', props)

  const context = useContext(FieldsContext)

  const handleSetValue = (e) => {
    const { name, value } = e.target
    e.preventDefault()
    setValue(name, value, { model })
    if (handleDispatch) {
      console.log('dispatch from child', context)
      handleDispatch(e, {
        type: 'onchange',
        payload: {
          id: item.id,
          target: e.target,
          context,
        },
      })
    }
  }

  return (
    <div className={styles.field}>
      <Component
        name={name}
        type="email"
        placeholder={placeholder}
        handleSetValue={handleSetValue}
        value={value}
      />
      <span className={styles.fieldIcon}>{<FiMail />}</span>
    </div>
  )
}

Email.defaultProps = {
  model: 'email',
  placeholder: 'name@example.com',
  component: DefaultInput,
}

Email.propTypes = {
  name: PropTypes.string.isRequired,
  model: PropTypes.oneOf(['email']),
  value: PropTypes.any,
  placeholder: PropTypes.node,
  setValue: PropTypes.func.isRequired,
}

export default withFormControl(React.memo(Email))
