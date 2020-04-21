How do I trust what is running on my production infrastructure? With Binary Authorization, you can be confident that only trusted workloads are running in your environment. Before deploying, a service checks to see if a valid attestation has been signed which allows the workload to go live. Workload signing is done by an Attestor, which will only sign workloads that have been built by CI and pass all compliance scans.

This is how SecureCorp deploys software, and you've just gained access to their CI/CD pipeline. You've created a malicious workload with the following SHA256 digest: 783791b5901b2714faeb09b1cf38b824d1209713f4e0034283b0e79df0e21f3c. In order to deploy it and pwn their infrastructure, you have to get it signed by the Attestor. Unfortunately, because it contains vulnerabilities, the Attestor will refuse to sign it. The only way to get the signature is through the breakglass override process, but doing so will alert the security team.

Can you get a valid attestation to deploy your malicious workload?

The Attestor code can be found on their internal repo (and attached): https://github.com/CameronLonsdale/SecureCorp/tree/master/attestor

The Attestor can be contacted on 172.106.32.110:8049

PS: The flag does not contain the usual sectalks{...} wrapper.