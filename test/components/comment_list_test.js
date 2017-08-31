import {renderComponent, expect} from '../test_helper'
import CommentList from '../../src/components/comment_list'

describe('Comment List', () => {
	let component;
	beforeEach(() => {
		const props = { comments: ['new comment', 'other comment', 'another comment'] }
		component = renderComponent(CommentList, null, props)
	})
	
	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(3);
	})
	it('shows each comment that is provided', () => {
		expect(component).to.contain('new comment')
		expect(component).to.contain('other comment')
		expect(component).to.contain('another comment')
	})

})