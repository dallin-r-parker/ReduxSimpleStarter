import {renderComponent, expect} from '../test_helper'
import CommentBox from '../../src/components/comment_box'

describe('Comment Box', () => {
	let component
	beforeEach(() => {
		component = renderComponent(CommentBox)
	})
	it('has a class of comment-box', () => {
		expect(component).to.have.class('comment-box')
	})
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist
	});
	it('has a button', () => {
		expect(component.find('button')).to.exist
	})
	it('has Click Me text', () => {
		expect(component.find('button')).to.contain('Click Me')
	})
	describe('enter text in textarea', () => {
		beforeEach(() => {
			component.find('textarea').simulate('change', 'new comment')
		})
		it('shows text that is entered', () => {
			expect(component.find('textarea')).to.have.value('new comment')
		})
		it('when submitted, clears the input', () => {
			component.simulate('submit')
			expect(component.find('textarea')).to.have.value('');
		})
	})
})