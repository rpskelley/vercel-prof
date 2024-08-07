/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6tDclOAonP8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  return (
    <div className="max-w-md mx-auto p-4 bg-background rounded-lg shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">To-Do List</h1>
          <Button variant="ghost" size="icon">
            <PlusIcon className="w-5 h-5" />
            <span className="sr-only">Add Task</span>
          </Button>
        </div>
        <div className="flex gap-2">
          <Input type="text" placeholder="Add a new task..." className="flex-1" />
          <Button>Add</Button>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="task-1" />
              <label htmlFor="task-1" className="text-sm font-medium">
                Buy groceries
              </label>
            </div>
            <Button variant="ghost" size="icon">
              <TrashIcon className="w-5 h-5" />
              <span className="sr-only">Delete Task</span>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="task-2" defaultChecked />
              <label htmlFor="task-2" className="text-sm font-medium line-through text-muted-foreground">
                Clean the house
              </label>
            </div>
            <Button variant="ghost" size="icon">
              <TrashIcon className="w-5 h-5" />
              <span className="sr-only">Delete Task</span>
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="task-3" />
              <label htmlFor="task-3" className="text-sm font-medium">
                Call mom
              </label>
            </div>
            <Button variant="ghost" size="icon">
              <TrashIcon className="w-5 h-5" />
              <span className="sr-only">Delete Task</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
