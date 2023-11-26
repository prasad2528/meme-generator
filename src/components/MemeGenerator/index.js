import {Component} from 'react'
import {
  BackgroundContainer,
  FormContainer,
  Heading,
  CardContainer,
  CustomLabel,
  CustomInput,
  InputsContainer,
  CustomOption,
  CustomSelect,
  CustomButton,
  MemeContainer,
  ParagraphElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    imageUrl: '',
    fontSize: '',
  }

  onChangeUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFonts = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  onSubmitForm = event => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    event.preventDefault()
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <Heading>Meme Generator</Heading>
        <InputsContainer>
          <CustomLabel htmlFor="url">Image Url</CustomLabel>
          <CustomInput
            type="text"
            id="url"
            placeholder="Enter the Image Url"
            value={imageUrlInput}
            onChange={this.onChangeUrl}
          />
        </InputsContainer>
        <InputsContainer>
          <CustomLabel htmlFor="Top">Top Text</CustomLabel>
          <CustomInput
            type="text"
            id="Top"
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
            value={topTextInput}
          />
        </InputsContainer>
        <InputsContainer>
          <CustomLabel htmlFor="Bottom">Bottom Text</CustomLabel>
          <CustomInput
            type="text"
            id="Bottom"
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
            value={bottomTextInput}
          />
        </InputsContainer>
        <InputsContainer>
          <CustomLabel htmlFor="select">Font Size</CustomLabel>
          <CustomSelect
            id="select"
            onChange={this.onChangeFonts}
            value={fontSizeInput}
          >
            {fontSizesOptionsList.map(eachFont => (
              <CustomOption key={eachFont.optionId} value={eachFont.optionId}>
                {eachFont.displayText}
              </CustomOption>
            ))}
          </CustomSelect>
        </InputsContainer>
        <CustomButton type="submit">Generate</CustomButton>
      </FormContainer>
    )
  }

  renderMemeGenerator = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
        <ParagraphElement fontSize={fontSize}>{topText}</ParagraphElement>
        <ParagraphElement fontSize={fontSize}>{bottomText}</ParagraphElement>
      </MemeContainer>
    )
  }

  render() {
    return (
      <BackgroundContainer>
        <CardContainer>
          {this.renderFormContainer()} {this.renderMemeGenerator()}
        </CardContainer>
      </BackgroundContainer>
    )
  }
}
export default MemeGenerator
