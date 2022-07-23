
import {expect,test} from 'vitest'
import {projectName} from "../src/constants";

test("project name is tslib-starter",()=>{
  expect(projectName).toContain('starter')
})
