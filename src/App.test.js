import { render, screen } from '@testing-library/react';
import App from './App';
import TreeNode from './TreeNode'
import all_logs from './stuff.json';

test('renders learn react link', () => {


  let sourceID = "76561198126477668"
  let goalID = "76561198047918912"

  // const graph = {"123":[[1,[123,234]],[2,[123,345]]],"234":[[4,[123,234]]],"456":[[3,[234,456]]]}
  const graph = all_logs

  console.log("restat")

  // BFS

  let visited = new Set()
  let queue = []

  let head = new TreeNode()
  head.prev = null
  head.id = sourceID

  let tree_nodes = new Map()
  tree_nodes.set(sourceID, head)

  queue.push(sourceID)
  visited.add(sourceID)

  while (queue.length > 0){
    let current = queue.pop()
    let current_tree = tree_nodes.get(current)
    console.log(current)

    if (current == goalID){
      console.log("goal")
      console.log("goal")
      console.log("goal")
      console.log("goal")
      console.log("goal")
      console.log("goal")
      return current_tree
    }

    // check if the player has any logs
    if (current in graph){
      let logs = graph[current]
      for (let log of logs){
        for (let playerid of log[1,log.length-1]){
          if (!visited.has(String(playerid))){
            queue.splice(0,0, String(playerid))
            visited.add(String(playerid))
            let new_tn = new TreeNode()
            new_tn.id = String(playerid)
            new_tn.prev = current_tree
            new_tn.connecting_log = log[0]
            current_tree.next.push(new_tn)
            tree_nodes.set(String(playerid), new_tn)
          }
        }
      }
    }
    console.log("end loop")
    console.log(queue)
  }

  console.log("didnt find");
  return sourceID
});

