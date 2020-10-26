import React from 'react';
import { Button, Box } from 'reactbulma';

class Template extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Box>
                <Button  onClick={this.props.addText}>Создать новый шаблон</Button>
                {/* <Button success onClick={this.props.addText}>+</Button> */}
                {/* <Button success onClick={this.props.addImage}>Изображение</Button> */}
            </Box>
        )
    }
}
export default Template;