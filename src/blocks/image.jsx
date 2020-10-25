import React from 'react';
import { Field, Control, Input } from 'reactbulma';

class Image extends React.Component {
    render() {
        return (
            <Field>
                <label className="label">url</label>
                <Control>
                    <Input placeholder="Text input" />
                </Control>
                <label className="label">Описание</label>
                <Control>
                    <Input placeholder="Text input" />
                </Control>
            </Field>
        )
    }
}
export default Image;