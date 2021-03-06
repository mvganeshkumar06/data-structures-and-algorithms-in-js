/*

DFS

Time - O(n*m)
Space - O(n*m)

*/

const dfs=(grid,visited,i,j)=>{
    
    if(i<0 || i>=grid.length || j<0 || j>=grid[i].length || visited[i][j] || grid[i][j]===0){
        return;
    }
    
    visited[i][j]=true;
    grid[i][j]=-1;
    
    dfs(grid,visited,i+1,j);
    dfs(grid,visited,i,j+1);
    dfs(grid,visited,i-1,j);
    dfs(grid,visited,i,j-1);
}

const numEnclaves = function(grid) {
    
    const visited=new Array(grid.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1 && !visited[i][j] && (i===0 || i===grid.length-1 || j===0 || j===grid[i].length-1)){
                dfs(grid,visited,i,j);
            }
        }
    }
    
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1){
                result++;
            }
            if(grid[i][j]===-1){
                grid[i][j]=1;
            }
        }
    }
    
    return result;
};

/*

BFS

Time - O(n*m)
Space - O(n*m)

*/

const Deque=require("../../data-structures/deque.js");

const bfs=(grid,visited,i,j)=>{
    
    const queue=new Deque();
    visited[i][j]=true;
    queue.push([i,j]);
    
    while(queue.getSize()>0){
        const [row,col]=queue.getFront();
        queue.deque();
        
        grid[row][col]=-1;
        
        if(isValid(grid,visited,row+1,col)){
            visited[row+1][col]=true;
            queue.push([row+1,col]);
        }
        
        if(isValid(grid,visited,row,col+1)){
            visited[row][col+1]=true;
            queue.push([row,col+1]);
        }
        
        if(isValid(grid,visited,row-1,col)){
            visited[row-1][col]=true;
            queue.push([row-1,col]);
        }
        
        if(isValid(grid,visited,row,col-1)){
            visited[row][col-1]=true;
            queue.push([row,col-1]);
        }
    }
    
}

const numEnclaves2 = function(grid) {
    
    const visited=new Array(grid.length);
    
    for(let i=0;i<visited.length;i++){
        visited[i]=new Array(grid[i].length);
        visited[i].fill(false);
    }
    
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1 && !visited[i][j] && (i===0 || i===grid.length-1 || j===0 || j===grid[i].length-1)){
                bfs(grid,visited,i,j);
            }
        }
    }
    
    let result=0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j]===1){
                result++;
            }
            if(grid[i][j]===-1){
                grid[i][j]=1;
            }
        }
    }
    
    return result;
};