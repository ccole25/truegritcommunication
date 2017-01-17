/*global React*/
/*global describe it*/
/*global expect*/
import MainContent from "components/MainContent";
import { shallow } from "enzyme";

describe("components/MainContent", () => {
  it("renders without an issue", () => {
    const subject = <MainContent />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

