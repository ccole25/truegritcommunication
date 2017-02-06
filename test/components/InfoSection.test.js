/*global React*/
/*global describe it*/
/*global expect*/
import InfoSection from "components/InfoSection";
import { shallow } from "enzyme";

describe("components/InfoSection", () => {
  it("renders without an issue", () => {
    const subject = <InfoSection />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

