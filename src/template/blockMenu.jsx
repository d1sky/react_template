import React from 'react';
import { Button } from 'reactbulma';

class BlockMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div>
                    <Button success onClick={this.props.addText}>Текст</Button>
                    <Button success onClick={this.props.addImage}>Изображение</Button>
                </div>
        )
    }
}
export default BlockMenu;