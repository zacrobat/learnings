<?php

$files = explode("\n","abw.geo.json
afg.geo.json
ago.geo.json
aia.geo.json
ala.geo.json
alb.geo.json
and.geo.json
are.geo.json
arg.geo.json
arm.geo.json
asm.geo.json
ata.geo.json
atf.geo.json
atg.geo.json
aus.geo.json
aut.geo.json
aze.geo.json
bdi.geo.json
bel.geo.json
ben.geo.json
bes.geo.json
bfa.geo.json
bgd.geo.json
bgr.geo.json
bhr.geo.json
bhs.geo.json
bih.geo.json
blm.geo.json
blr.geo.json
blz.geo.json
bmu.geo.json
bol.geo.json
bra.geo.json
brb.geo.json
brn.geo.json
btn.geo.json
bvt.geo.json
bwa.geo.json
caf.geo.json
can.geo.json
cck.geo.json
che.geo.json
chl.geo.json
chn.geo.json
civ.geo.json
cmr.geo.json
cod.geo.json
cog.geo.json
cok.geo.json
col.geo.json
com.geo.json
cpv.geo.json
cri.geo.json
cub.geo.json
cuw.geo.json
cxr.geo.json
cym.geo.json
cyp.geo.json
cze.geo.json
deu.geo.json
dji.geo.json
dma.geo.json
dnk.geo.json
dom.geo.json
dza.geo.json
ecu.geo.json
egy.geo.json
eri.geo.json
esh.geo.json
esp.geo.json
est.geo.json
eth.geo.json
fin.geo.json
fji.geo.json
flk.geo.json
fra.geo.json
fro.geo.json
fsm.geo.json
gab.geo.json
gbr.geo.json
geo.geo.json
ggy.geo.json
gha.geo.json
gib.geo.json
gin.geo.json
glp.geo.json
gmb.geo.json
gnb.geo.json
gnq.geo.json
grc.geo.json
grd.geo.json
grl.geo.json
gtm.geo.json
guf.geo.json
gum.geo.json
guy.geo.json
hkg.geo.json
hmd.geo.json
hnd.geo.json
hrv.geo.json
hti.geo.json
hun.geo.json
idn.geo.json
imn.geo.json
ind.geo.json
iot.geo.json
irl.geo.json
irn.geo.json
irq.geo.json
isl.geo.json
isr.geo.json
ita.geo.json
jam.geo.json
jey.geo.json
jor.geo.json
jpn.geo.json
kaz.geo.json
ken.geo.json
kgz.geo.json
khm.geo.json
kir.geo.json
kna.geo.json
kor.geo.json
kwt.geo.json
lao.geo.json
lbn.geo.json
lbr.geo.json
lby.geo.json
lca.geo.json
lie.geo.json
lka.geo.json
lso.geo.json
ltu.geo.json
lux.geo.json
lva.geo.json
mac.geo.json
maf.geo.json
mar.geo.json
mco.geo.json
mda.geo.json
mdg.geo.json
mdv.geo.json
mex.geo.json
mhl.geo.json
mkd.geo.json
mli.geo.json
mlt.geo.json
mmr.geo.json
mne.geo.json
mng.geo.json
mnp.geo.json
moz.geo.json
mrt.geo.json
msr.geo.json
mtq.geo.json
mus.geo.json
mwi.geo.json
mys.geo.json
myt.geo.json
nam.geo.json
ncl.geo.json
ner.geo.json
nfk.geo.json
nga.geo.json
nic.geo.json
niu.geo.json
nld.geo.json
nor.geo.json
npl.geo.json
nru.geo.json
nzl.geo.json
omn.geo.json
pak.geo.json
pan.geo.json
pcn.geo.json
per.geo.json
phl.geo.json
plw.geo.json
png.geo.json
pol.geo.json
pri.geo.json
prk.geo.json
prt.geo.json
pry.geo.json
pse.geo.json
pyf.geo.json
qat.geo.json
reu.geo.json
rou.geo.json
rus.geo.json
rwa.geo.json
sau.geo.json
sdn.geo.json
sen.geo.json
sgp.geo.json
sgs.geo.json
shn.geo.json
sjm.geo.json
slb.geo.json
sle.geo.json
slv.geo.json
smr.geo.json
som.geo.json
spm.geo.json
srb.geo.json
ssd.geo.json
stp.geo.json
sur.geo.json
svk.geo.json
svn.geo.json
swe.geo.json
swz.geo.json
sxm.geo.json
syc.geo.json
syr.geo.json
tca.geo.json
tcd.geo.json
tgo.geo.json
tha.geo.json
tjk.geo.json
tkl.geo.json
tkm.geo.json
tls.geo.json
ton.geo.json
tto.geo.json
tun.geo.json
tur.geo.json
tuv.geo.json
twn.geo.json
tza.geo.json
uga.geo.json
ukr.geo.json
umi.geo.json
unk.geo.json
ury.geo.json
usa.geo.json
uzb.geo.json
vat.geo.json
vct.geo.json
ven.geo.json
vgb.geo.json
vir.geo.json
vnm.geo.json
vut.geo.json
wlf.geo.json
wsm.geo.json
yem.geo.json
zaf.geo.json
zmb.geo.json
zwe.geo.json");

$countries = [];
foreach($files as $f) {
  $data=json_decode(file_get_contents($f),true);
  $countries[] = $data['features'][0];
}
// print_r($data);
$output=[
    "type" => "FeatureCollection",
    "features" => $countries
  ];
file_put_contents('countries02.json', json_encode($output));