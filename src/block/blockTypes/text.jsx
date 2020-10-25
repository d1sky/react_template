import React from 'react';
import { Field, Control, Input, Textarea } from 'reactbulma';

class Text extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Field>
                <label className="label">Заголовок</label>
                <Control>
                    <Input />
                </Control>
                <label className="label">Основной текст</label>
                <Control>
                    <Textarea />
                </Control>
            </Field>
        )
    }
}
export default Text;