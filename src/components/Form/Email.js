import React from 'react'
import { withFormControl } from '.'
import PropTypes from 'prop-types'
import styles from './Form.module.css'
import { FiMail } from 'react-icons/fi'
import DefaultInput from './DefaultInput'

function Email(props) {
  const {
    name,
    value,
    placeholder,
    model,
    setValue,
    component: Component,
  } = props
  // console.log('Email', props)

  return (
    <div className={styles.field}>
      <Component
        name={name}
        type="email"
        placeholder={placeholder}
        model={model}
        setValue={setValue}
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
