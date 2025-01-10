import {Component} from '@angular/core';
import {SdsColumnStringComponent, SdsTableComponent} from "@sdsx/core";
import {ButtonModule, CheckboxModule, TagModule} from "carbon-components-angular";
import {
  CdkDrag,
  CdkDragDrop, CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";

import {Checkbox} from "carbon-components-angular"
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CdkTrapFocus} from "@angular/cdk/a11y";

export function getUniqueId(parts: number): string {
  const stringArr: string[] = []
  for (let i = 0; i < parts; i++) {

    const S4 = ((1 + Math.random() * 1000)).toString(16).substring(1).toString();

    stringArr.push(S4)
  }
  return stringArr.join('-')
}

@Component({
  selector: 'app-unidade-table',
  standalone: true,
  imports: [
    SdsTableComponent,
    SdsColumnStringComponent,
    SdsTableComponent,
    SdsColumnStringComponent,
    TagModule,
    CdkDropList,
    CdkDrag,
    CheckboxModule,
    NgClass,
    CdkDropListGroup,
    ButtonModule,
    CdkDragHandle,
    CdkTrapFocus,
    NgIf,
    NgForOf

  ],
  templateUrl: './unidade-table.component.html',
  styles: ``
})
export class UnidadeTableComponent {
  public deletableTaskGroupIndex: number | null = null

  public taskFocusId: string = ''

  public transparent = false

  onSelectedDeletableGroup(groupIndex) {
    this.deletableTaskGroupIndex = groupIndex
  }


  onAddTask(groupIndex) {
    const uid = getUniqueId(5)
    const newTask = {
      description: '',
      level: 1,
      checked: false,
      id: uid,
    }
    this.taskGroups[groupIndex].tasks = [...this.taskGroups[groupIndex].tasks, newTask]
    this.taskFocusId = uid
  }


  getProgress(groupIndex) {
    const tasks = this.taskGroups[groupIndex].tasks
    const solved = this.taskGroups[groupIndex].tasks.filter(task => task.checked === true)
    const percentage = ((solved.length / tasks.length) * 100)
    /*    if (percentage === 100) {
          this.taskGroups[groupIndex].opened = false
        }*/
    return `${percentage}%`
  }

  trackByFn(index, row) {
    return index
  }

  onGroupChange(event, groupIndex) {
    this.taskGroups[groupIndex].groupName = event
  }

  onToggleGroup(groupIndex) {
    this.taskGroups[groupIndex].opened = !this.taskGroups[groupIndex].opened
  }

  onTaskChange(event: string, groupIndex: string | number, taskIndex: string | number) {
    this.taskGroups[groupIndex].tasks[taskIndex].description = event
  }

  onDeleteTask(groupIndex, taskIndex) {
    this.taskGroups[groupIndex].tasks.splice(taskIndex, 1)
  }


  onSwitchPriority(groupIndex, taskIndex) {
    const task = this.taskGroups[groupIndex].tasks[taskIndex]
    if (task.priority === undefined || task.priority === 'normal') {
      task.priority = 'high'
    }
    else if(task.priority === 'high'){
      task.priority = 'low'
    }
    else if(task.priority === 'low'){
      task.priority = 'normal'
    }
  }



  getConnectedList(): any[] {
    return this.taskGroups.map(x => `${x.id}`)
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
    else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  dropGroup(event: CdkDragDrop<any>) {
    moveItemInArray(this.taskGroups, event.previousIndex, event.currentIndex)
  }


  onDeleteGroup(groupIndex) {
    this.taskGroups.splice(groupIndex, 1)
  }



  public taskGroups = [
    {
      groupName: 'Monday frontend meeting',
      id: 'sadas',
      opened: true,
      tasks: [
        {
          description: 'Angular v9 dependency updates',
          id: 'sadasdas',
          level: 1,
          checked: false,
          priority: 'high',
        },
        {
          description: 'Make more descriptive errors for directives\' errors in AOT build',
          level: 1,
          id: 'sadassdfsdfsdfdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'Add autocorrect attribute support on field for iOS devices',
          level: 1,
          id: 'sadassdfsddfsdfdsdas',
          checked: false,
        },
        {
          description: 'docs: update /deep/ to ::ng-deep ',
          id: 'sadassdfsddfdasdsasdasdfdsdas',
          checked: false,
          priority: 'low',
        },
        {
          description: '*ngFor should support separators',
          id: 'sadassdfsddfdasdssdsdfsasdasdfdsdas',
          checked: false,
        },

        {
          description: 'Interpolation options for View.styles argument',
          id: 'sadassdfsddfdasdssdsdfsas2dasdfdsdas',
          checked: false,
        },
        {
          description: 'Angular2 Routing: persisting route tabs and child routes',
          id: 'sadassdfsddfdasdssds1dfsasdasdfdsdas',
          checked: true,
          priority: 'low',
        },
        {
          description: 'Implement @ObserveChildren or similar API',
          id: 'sadassdfsddfdasds2sdsdfsasdasdfdsdas',
          checked: true,
          priority: 'high',
        }
      ]
    },
    {
      groupName: 'Kubernetes cluster meeting last tuesday',
      id: 'sadas2',
      opened: true,
      tasks: [
        {
          description: 'Provide a way to perform offline CRD schema validation',
          level: 1,
          id: 'sadassdfsddfd2asdssdsdfsasdasdfdsdas',
          checked: false,
        },
        {
          description: 'Specific error status codes for volume operation metrics',
          level: 1,
          id: 'sadfd2asdssdsdfsasdasdfdsdas',
          checked: true,
          priority: 'low',
        },
        {
          description: 'Unix domain socket cause crashes in Windows certain versions ',
          level: 1,
          id: 'sasdssdsdfsasdasdfdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'Evicted DaemonSet pod stuck Daemonset\'s rolling update',
          level: 1,
          id: 'sasdssdsdf5sasdasdfdsdas',
          checked: false,
        },
        {
          description: 'increase volume provisioning rate',
          level: 1,
          id: 'sasdssdsd5454f5sasdasdfdsdas',
          checked: false,
        },
        {
          description: 'startupProbe readiness state update issues',
          level: 1,
          id: 'dffddsffsd',
          checked: true,
          priority: 'high',
        }
      ]
    },
    {
      groupName: 'Devops todo',
      id: 'sadas22',
      opened: true,
      tasks: [
        {
          description: 'support container based scaling to HPA with custom-metrics server',
          level: 1,
          id: 'sadassdfsddfd2asdssdsdfsasdasdfdsd2as',
          checked: false,
        },
        {
          description: 'Move disallow volume expansion test ouside of storage driver testsuite',
          level: 1,
          id: 'sadfd2asdssdsdfsasdasdfdsda2s',
          checked: true,
          priority: 'high',
        },
        {
          description: 'timeBudget shouldn\'t depend on the real clock help wanted',
          level: 1,
          id: 'sasdssdsdfsasdasd3fdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'waitForFirstConsumer PVCs fail to bind when Pod spec.nodeName is specified  ',
          level: 1,
          id: 'sasdssdsdf5sasdas4dfdsdas',
          checked: true,
          priority: 'high',
        },
        {
          description: 'Add default node affinity constraints to NodeAffinity plugin',
          level: 1,
          id: 'sasdssdsd5454f5sasda5sdfdsdas',
          checked: true,
          priority: 'high',
        }
      ]
    }
  ]



}
