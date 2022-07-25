import logo from './logo.svg';
import './App.css';
import all_logs from './stuff.json';
import TreeNode from './TreeNode'


function App(props) {

    let final_tree = find_connection("76561198126477668", "76561198047918912")
    final_tree = find_connection("76561198126477668", "76561198126477668")
    // find_connection("123","456") despacito

    console.log(final_tree.id)
    while (final_tree.prev != null){
        console.log(final_tree.connecting_log)
        final_tree = final_tree.prev
    }

    return (
        <div className="App">

        </div>
    );
}

function find_connection(sourceID, goalID) {

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

    let searched = []
    while (queue.length > 0){
        let current = queue.pop()
        let current_tree = tree_nodes.get(current)

        if (current == goalID){
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
                searched.push(log[0])
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
    }

    console.log("didnt find");
    console.log(searched);
    return head
}

export default App;


