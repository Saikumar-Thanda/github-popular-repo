import './index.css'

const LanguageFilterItem = props => {
  const {isActive, setActiveId, languageDetails} = props
  const {id, language} = languageDetails

  const buttonClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'
  const onClickBtn = () => {
    setActiveId(id)
  }

  return (
    <li className="filter-item">
      <button className={buttonClassName} type="button" onClick={onClickBtn}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
