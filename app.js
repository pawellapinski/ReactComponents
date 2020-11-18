const ValidationMessage = (props) => {
  const { txt } = props
  return (
    <p>{txt}</p>
  )
}

const AddressForm = (props) => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="address" onChange={change} checked={isConfirmed} />
      <label htmlFor="address">Potwierdzam formularz adresów</label>
      <br />
      <button type="submit">Wyślij adres</button>
    </form>
  )
}

class AddressShipping extends React.Component {

  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }

  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false,
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }
  }

  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Adres został dodany!" />
      } else {
        return <ValidationMessage txt="Musisz potwierdzić formularz!" />
      }
    } else { return null }
  }

  render() {
    const { isConfirmed, isFormSubmitted } = this.state

    return (
      <>
        <h1>Formularz z przykładowymi danymi</h1>
        <AddressForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={isConfirmed}
        />
        {this.displayMessage()}
      </>
    )
  }
}

ReactDOM.render(<AddressShipping />, document.getElementById('root'))