/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
describe("jquery", function () {

    it("is an abated function", function () {
        expect(typeof jQuery).toEqual("function");
    });

    it("is an abated object", function () {
        expect(typeof jQuery.ui).toEqual("object");
    });

    it("ui accordian is an abated function", function () {
        expect(typeof jQuery.ui.accordion).toEqual("function");
    });

    itBrowser("tooltip is an abated object", function () {
        expect(typeof jQuery.tooltip).toEqual("object");
    });

});
