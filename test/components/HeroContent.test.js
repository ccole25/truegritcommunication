/*global React*/
/*global describe it*/
/*global expect*/
import HeroContent from "components/HeroContent";
import { shallow } from "enzyme";

describe("components/HeroContent", () => {
  it("renders without an issue", () => {
    const subject = <HeroContent />;
    const wrapper = shallow(subject);
    expect(wrapper).to.exist;
  });
});

