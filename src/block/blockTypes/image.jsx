import React from 'react';
import { Field, Control, Input } from 'reactbulma';

class Image extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Field>
                <label className="label">url</label>
                <Control>
                    <Input />
                </Control>
                <label className="label">Описание</label>
                <Control>
                    <Input />
                </Control>
            </Field>
        )
    }
}
export default Image;