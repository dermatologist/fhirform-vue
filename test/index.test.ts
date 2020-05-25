import { FhirFormVue } from '../src/fhirform-vue';
import fetch from 'isomorphic-fetch'
describe('ffvue', () => {
  it('should output model and schema', async () => {
    await fetch('https://www.hl7.org/fhir/questionnaire-example-f201-lifelines.json')
      .then((response) => response.json())
      .then(async (myJson) => {
        const ff = FhirFormVue(myJson);
        console.log(ff);
        expect(ff).toBeDefined();
      });

  })});