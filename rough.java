//{ Driver Code Starts
import java.io.*;
import java.util.*;

public class Main {
    static BufferedReader br;
    static PrintWriter ot;

    public static void main(String[] args) throws IOException {
        br = new BufferedReader(new InputStreamReader(System.in));
        ot = new PrintWriter(System.out);

        int t = Integer.parseInt(br.readLine().trim());

        while (t-- > 0) {
            String s[] = br.readLine().trim().split(" ");
            int n = Integer.parseInt(s[0]), m = Integer.parseInt(s[1]);
            int edges[][] = new int[m][3];
            for (int i = 0; i < m; i++) {
                s = br.readLine().trim().split(" ");
                edges[i][0] = Integer.parseInt(s[0]);
                edges[i][1] = Integer.parseInt(s[1]);
                edges[i][2] = Integer.parseInt(s[2]);
            }

            List<Integer> list = new Solution().shortestPath(n, m, edges);

            ot.println(list.get(0));
            if (list.get(0) != -1 && !check(list, edges)) ot.println(-1);
        }
        ot.close();
    }

    static boolean check(List<Integer> list, int edges[][]) {
        Set<Integer> hs = new HashSet<>();
        Map<Integer, Map<Integer, Integer>> hm = new HashMap<>();
        for (int i = 1; i < list.size(); i++) hs.add(list.get(i));
        for (int x[] : edges) {
            if (hs.contains(x[0]) || hs.contains(x[1])) {
                if (!hm.containsKey(x[0])) hm.put(x[0], new HashMap<>());
                if (!hm.containsKey(x[1])) hm.put(x[1], new HashMap<>());
                hm.get(x[0]).put(x[1], x[2]);
                hm.get(x[1]).put(x[0], x[2]);
            }
        }
        int sum = 0;
        for (int i = 1; i < list.size() - 1; i++) {
            if (!hm.containsKey(list.get(i)) ||
                !hm.get(list.get(i)).containsKey(list.get(i + 1)))
                return false;
            sum += hm.get(list.get(i)).get(list.get(i + 1));
        }
        return sum == list.get(0);
    }
}

// } Driver Code Ends

class Pair{
    int first;
    int second;
    Pair(int first,int second){
        this.first=first;
        this.second=second;
    }
}
class Solution {
    public List<Integer> shortestPath(int n, int m, int edges[][]) {
        //  Code Here.
        List<Pair> []adj=new ArrayList[n+1];
        for(int i=0;i<n+1;i++)
        {
            adj[i]=new ArrayList<>();
        }
        
        for(int i=0;i<m;i++)
        {
            adj[edges[i][0]].add(new Pair(edges[i][1],edges[i][2]));
            adj[edges[i][1]].add(new Pair(edges[i][0],edges[i][2]));
        }
        
        int []dis=new int[n+1];
        for(int i=0;i<n+1;i++) dis[i]=Integer.MAX_VALUE;
        PriorityQueue<Pair> pq=new PriorityQueue<Pair>((x,y)->Integer.compare(x.first,y.first));
        pq.add(new Pair(0,1));
        dis[1]=0;
        int []Parent=new int[n+1];
        for(int i=0;i<n+1;i++) Parent[i]=i;
        while(!pq.isEmpty())
        {
            int node=pq.peek().second;
            int step=pq.peek().first;
            pq.poll();
            
            for(Pair it:adj[node])
            {
                int adjNode=it.first;
                int wt=it.second;
                
                if(wt+step<dis[adjNode])
                {
                    dis[adjNode]=wt+step;
                    pq.add(new Pair(dis[adjNode],adjNode));
                    Parent[adjNode]=node;
                }
            }
        }
        
        List<Integer> ans=new ArrayList<>();
        ans.add(n);
        while(n!=Parent[n])
        {
            n=Parent[n];
            ans.add(n);
        }
        
        Collections.reverse(ans);
        
        return ans;
    }
}

