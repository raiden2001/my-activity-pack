import type { IActivityHandler } from "@vertigis/workflow";

/** An interface that defines the inputs of the activity. */
interface MapPopInputs {
    /**
     * @displayName Input 1
     * @description The first input to the activity.
     * @required
     */
    input1: string;

    /**
     * @displayName Input 2
     * @description The second input to the activity.
     */
    input2?: number;
}

/** An interface that defines the outputs of the activity. */
interface MapPopOutputs {
    /**
     * @description The result of the activity.
     */
    result: string;
}

/**
 * @displayName MapPop
 * @category Custom Activities
 * @description New location
 */
export default class MapPopActivity implements IActivityHandler {
    /** Perform the execution logic of the activity. */
    execute(inputs: MapPopInputs): MapPopOutputs {
        return {
            result: `input1: ${inputs.input1}, input2: ${
                inputs.input2 ?? "undefined" // change from || to ?? for nullish coalescing
            }`,
        };
    }
}
