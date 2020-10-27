import React from 'react';
import { Button, Box, Container, Field, Control } from 'reactbulma';
import TemplateList from './TemplateList.jsx';

class TemplateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible
        }
    }



    render() {
        const visible = this.props.visible;
        return (
            <Container>
                {visible ? (
                    <div>
                        <Box>
                            <Button onClick={this.props.createNewTemplate}>Создать новый шаблон</Button>
                            {/* <Button success onClick={this.props.addText}>+</Button> */}
                            {/* <Button success onClick={this.props.addImage}>Изображение</Button> */}
                        </Box>
                        <TemplateList />
                    </div>
                ) : (
                        <Box>
                            <Field grouped>
                                <Control>
                                    <Button onClick={this.props.addText}>Текст</Button>
                                </Control>
                                <Control>
                                    <Button onClick={this.props.addImage}>Изображение</Button>
                                </Control>
                            </Field>

                        </Box>
                    )
                }

            </Container>

        )
    }
}
export default TemplateForm;