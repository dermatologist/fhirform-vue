import { FhirFormVue } from '../src/fhirform-vue';
// import { Testq1 } from '../src/example/testq1'

// describe('blah', () => {
//   it('works', () => {
//     expect(FhirFormVue(Testq1)).toBeDefined();
//   });
// });
import fetch from 'isomorphic-fetch'
describe('ffvue', () => {
  it('should show id', async () => {
    await fetch('https://www.hl7.org/fhir/questionnaire-example-f201-lifelines.json')
      .then((response) => response.json())
      .then(async (myJson) => {
        const ff = FhirFormVue(myJson);
        console.log(ff);
        expect(ff).toBeDefined();
      });

  })});