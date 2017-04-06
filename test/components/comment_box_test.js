import { renderComponent, expect } from '../test_helper'
import CommentBox from '../../src/components/comment_box'

// Use 'describe' to group together similar tests
describe('CommentBox', () => {

    let component // CommentBox

    beforeEach(() => {
        // create an instance of App
        component = renderComponent(CommentBox)
    })

    // Use 'it' to test a single attribute of a target
    it('has the correct class', () => {

        // Use 'expect' to make an 'assertion' about a target
        expect(component).to.have.class('comment-box')

    })

    // Use 'it' to test a single attribute of a target
    it('has a text area', () => {

        // Use 'expect' to make an 'assertion' about a target
        expect(component.find('textarea')).to.exist

    })

    // Use 'it' to test a single attribute of a target
    it('has a button', () => {

        // Use 'expect' to make an 'assertion' about a target
        expect(component.find('button')).to.exist

    })

    describe('Entering some text', () => {

        beforeEach(() => {
            // create an instance of App
            component.find('textarea').simulate('change','new comment')
        })

        it('shows that text in the textarea', () => {
            expect(component.find('textarea')).to.have.value('new comment')
        })

        it('when submitted, clear input', () => {
            component.simulate('submit')
            expect(component.find('textarea')).to.have.value('')
        })
    })

})