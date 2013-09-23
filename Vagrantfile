# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"

  config.vm.provider :virtualbox do |vb|
   # Use VBoxManage to customize the VM. For example to change memory:
   vb.customize ["modifyvm", :id, "--memory", "2048"]
  end

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.json.merge!({
                       :java => {
                         :install_flavor => "oracle",
                         :oracle => {
                           "accept_oracle_download_terms" => true
                         },
                         :jdk_version => "7",
                         :jdk => {
                           :"7" => {
                             :x86_64 => {
                               :url => "http://download.oracle.com/otn-pub/java/jdk/7u40-b43/jdk-7u40-linux-x64.tar.gz",
                               :checksum => "72f6e010592cad5e994276eee7db5f0b0d7c15c06949bd81f0e14811048bcf2c"
                             }
                           }
                         }
                       },
                       :neo4j => {
                         :server => {
                           :version => "2.0.0-M05",
                           :tarball => {
                             :url => "http://download.neo4j.org/artifact?edition=community&version=2.0.0-M05&distribution=tarball"
                           },
                           :node_auto_indexing => {
                             :enabled => true,
                             :keys_indexable => 'user,organization'
                           }
                         }
                       }
                     })
    chef.add_recipe "apt"
    chef.add_recipe "java"
    chef.add_recipe "neo4j-server::tarball"
  end

  config.vm.network :forwarded_port, guest: 7474, host: 7474

  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

end
