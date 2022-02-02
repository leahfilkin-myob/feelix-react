import React from "react";
import {Box, Button, Columns, FormHorizontal} from "@myob/myob-widgets";
import Column from "@myob/myob-widgets/lib/components/Columns/Column";
import {
    flxPaletteAzure, flxPaletteStorm06, flxPaletteWhite
} from "@myob/myob-styles/dist/design-tokens/js/design-tokens";

export function Item(props) {

    return (<Box
        borderStyle="solid"
        borderWidth="thin"
        backgroundColor={flxPaletteWhite}
        borderRadius="xl"
        padding="xl"
        textAlign="center"
        marginBottom="sm"
    >
        <Columns
            textAlign="center"
            alignY="center"
            className="justifyWithSpaceBetween"
        >
            <Columns.Column>
                <p role={"ingredient" + props.index}
                   className={props.isChecked ? 'option ticked' : 'option'}>{props.name}</p>
            </Columns.Column>
            <Columns.Column>
                <Button type="secondary"
                        disabled={props.isChecked} onClick={() => props.tickItemCallback(props.index)}
                        className='tickButton'
                >Tick!</Button>
            </Columns.Column>
        </Columns>
    </Box>);
}