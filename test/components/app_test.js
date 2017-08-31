import {renderComponent, expect} from '../test_helper'
import App from '../../src/components/app';


describe('App', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(App)
	})
	it('shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist
	})
	it('has a li', () => {
		expect(component.find('.comment-list')).to.exist
	})
})



















////describe() : Use to group to get similar test
//describe('Component: App', () => {
//	//it : use 'it' to test a single attribute of a target
//	it('shows correct text', () => {
//		const component = renderComponent(App)
//
//		//expect : Use 'expect' to make an 'assertion' about a target
//		expect(component).to.contain('React simple starter')
//	})
//
//})
//
//
//// expect boiler plate: expect( component ).to.have.class( 'some-class' )
//// ========================================^^^MATCHER^^^==================